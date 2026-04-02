import { useEffect, useRef, useState } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const distanceBetweenTouches = (touches) => {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
};

const useTouchGallery = (images = []) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const swipeStartXRef = useRef(null);
  const pinchDistanceRef = useRef(null);
  const pinchZoomRef = useRef(1);
  const panStartRef = useRef(null);

  const goTo = (index) => {
    const normalized = (index + images.length) % images.length;
    setActiveIndex(normalized);
  };

  const next = () => goTo(activeIndex + 1);
  const previous = () => goTo(activeIndex - 1);

  const resetGestureState = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    pinchDistanceRef.current = null;
    pinchZoomRef.current = 1;
    panStartRef.current = null;
  };

  useEffect(() => {
    resetGestureState();
  }, [activeIndex]);

  const onTouchStart = (event) => {
    if (event.touches.length === 2) {
      pinchDistanceRef.current = distanceBetweenTouches(event.touches);
      pinchZoomRef.current = zoom;
      swipeStartXRef.current = null;
      return;
    }

    if (event.touches.length === 1) {
      swipeStartXRef.current = event.touches[0].clientX;
      if (zoom > 1) {
        panStartRef.current = {
          x: event.touches[0].clientX - offset.x,
          y: event.touches[0].clientY - offset.y
        };
      }
    }
  };

  const onTouchMove = (event) => {
    if (event.touches.length === 2 && pinchDistanceRef.current) {
      const currentDistance = distanceBetweenTouches(event.touches);
      const nextZoom = clamp((currentDistance / pinchDistanceRef.current) * pinchZoomRef.current, 1, 2.4);
      setZoom(nextZoom);
      if (nextZoom === 1) {
        setOffset({ x: 0, y: 0 });
      }
      return;
    }

    if (event.touches.length === 1 && zoom > 1 && panStartRef.current) {
      const nextX = event.touches[0].clientX - panStartRef.current.x;
      const nextY = event.touches[0].clientY - panStartRef.current.y;
      setOffset({
        x: clamp(nextX, -120, 120),
        y: clamp(nextY, -120, 120)
      });
    }
  };

  const onTouchEnd = (event) => {
    if (event.touches.length === 0 && swipeStartXRef.current !== null && zoom === 1) {
      const endX = event.changedTouches?.[0]?.clientX;
      const delta = swipeStartXRef.current - endX;
      if (Math.abs(delta) > 48) {
        if (delta > 0) {
          next();
        } else {
          previous();
        }
      }
    }

    if (event.touches.length < 2) {
      pinchDistanceRef.current = null;
      pinchZoomRef.current = zoom;
    }

    if (event.touches.length === 0) {
      swipeStartXRef.current = null;
      panStartRef.current = null;
    }
  };

  return {
    activeIndex,
    activeImage: images[activeIndex],
    zoom,
    offset,
    next,
    previous,
    goTo,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    resetGestureState
  };
};

export default useTouchGallery;
