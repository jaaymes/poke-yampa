import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFetching: boolean;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  threshold?: number;
}

export const useInfiniteScroll = ({
  hasNextPage,
  hasPreviousPage,
  isFetching,
  fetchNextPage,
  fetchPreviousPage,
  threshold = 100,
}: UseInfiniteScrollProps) => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const isLoadingRef = useRef(false);
  const lastTouchY = useRef(0);
  const scrollVelocityRef = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const requestCooldownRef = useRef(false);
  const scrollDirectionHistory = useRef<string[]>([]);
  const lastRequestType = useRef<"next" | "previous" | null>(null);

  // Função para calcular velocidade do scroll
  const calculateScrollVelocity = useCallback((currentScrollY: number) => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime.current;
    const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

    if (timeDiff > 0) {
      scrollVelocityRef.current = scrollDiff / timeDiff;
    }

    lastScrollTime.current = currentTime;
  }, []);

  // Função para detectar direção consistente do scroll
  const updateScrollDirection = useCallback((direction: string) => {
    scrollDirectionHistory.current.push(direction);

    // Manter apenas os últimos 3 movimentos
    if (scrollDirectionHistory.current.length > 3) {
      scrollDirectionHistory.current.shift();
    }

    // Considerar direção consistente se pelo menos 2 dos últimos 3 movimentos forem na mesma direção
    const upCount = scrollDirectionHistory.current.filter(
      (d) => d === "up"
    ).length;
    const downCount = scrollDirectionHistory.current.filter(
      (d) => d === "down"
    ).length;

    if (upCount >= 2) {
      setIsScrollingUp(true);
    } else if (downCount >= 2) {
      setIsScrollingUp(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    // Evitar múltiplas execuções simultâneas
    if (isLoadingRef.current || requestCooldownRef.current) return;

    const currentScrollY = window.scrollY;
    const scrollDiff = currentScrollY - lastScrollY.current;

    // Ignorar movimentos muito pequenos
    if (Math.abs(scrollDiff) < 5) return;

    calculateScrollVelocity(currentScrollY);

    const scrollDirection = scrollDiff > 0 ? "down" : "up";
    updateScrollDirection(scrollDirection);

    // Trava para scroll muito rápido (velocidade > 2 pixels por ms)
    if (scrollVelocityRef.current > 2) {
      console.log("Scroll muito rápido, aguardando...");
      return;
    }

    // Scroll para baixo - carregar próxima página
    if (scrollDirection === "down" && hasNextPage && !isFetching) {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (
        distanceFromBottom < threshold &&
        lastRequestType.current !== "next"
      ) {
        console.log(
          "Acionando fetchNextPage - distância do bottom:",
          distanceFromBottom
        );
        isLoadingRef.current = true;
        requestCooldownRef.current = true;
        lastRequestType.current = "next";

        fetchNextPage();

        // Cooldown para evitar requests duplos
        setTimeout(() => {
          isLoadingRef.current = false;
        }, 1000);

        setTimeout(() => {
          requestCooldownRef.current = false;
          lastRequestType.current = null;
        }, 2000);
      }
    }

    // Scroll para cima - carregar página anterior
    if (scrollDirection === "up" && hasPreviousPage && !isFetching) {
      if (
        currentScrollY < threshold &&
        lastRequestType.current !== "previous"
      ) {
        console.log("Acionando fetchPreviousPage - posição:", currentScrollY);
        isLoadingRef.current = true;
        requestCooldownRef.current = true;
        lastRequestType.current = "previous";
        const currentScrollPosition = currentScrollY;

        fetchPreviousPage();

        // Manter posição relativa após carregar dados anteriores
        setTimeout(() => {
          const newScrollPosition = Math.max(currentScrollPosition + 600, 300);
          window.scrollTo(0, newScrollPosition);
          isLoadingRef.current = false;
        }, 200);

        setTimeout(() => {
          requestCooldownRef.current = false;
          lastRequestType.current = null;
        }, 2000);
      }
    }

    lastScrollY.current = currentScrollY;
  }, [
    hasNextPage,
    hasPreviousPage,
    isFetching,
    fetchNextPage,
    fetchPreviousPage,
    threshold,
    calculateScrollVelocity,
    updateScrollDirection,
  ]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    lastTouchY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const currentTouchY = e.touches[0].clientY;
      const touchDiff = currentTouchY - lastTouchY.current;
      const touchDirection = touchDiff < 0 ? "down" : "up";

      updateScrollDirection(touchDirection);
      lastTouchY.current = currentTouchY;
    },
    [updateScrollDirection]
  );

  // Reset das travas quando as props mudarem
  useEffect(() => {
    if (!isFetching) {
      isLoadingRef.current = false;
    }
  }, [isFetching]);

  // Reset quando hasNextPage ou hasPreviousPage mudarem
  useEffect(() => {
    lastRequestType.current = null;
    requestCooldownRef.current = false;
  }, [hasNextPage, hasPreviousPage]);

  // Função para reset manual
  const resetScroll = useCallback(() => {
    console.log("Reset manual do infinite scroll");
    isLoadingRef.current = false;
    requestCooldownRef.current = false;
    lastRequestType.current = null;
    scrollDirectionHistory.current = [];
    scrollVelocityRef.current = 0;
  }, []);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 50); // Reduzido de 100 para 50ms para melhor responsividade

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]);

  // Função para debug
  const getDebugInfo = useCallback(() => {
    return {
      isScrollingUp,
      scrollVelocity: scrollVelocityRef.current,
      isLoadingRef: isLoadingRef.current,
      requestCooldownRef: requestCooldownRef.current,
      scrollDirectionHistory: scrollDirectionHistory.current,
      lastRequestType: lastRequestType.current,
    };
  }, [isScrollingUp]);

  return {
    isScrollingUp,
    getDebugInfo,
    resetScroll,
  };
};

// Função throttle melhorada para otimizar performance
function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}
