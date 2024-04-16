import { act, renderHook } from '@testing-library/react';
import { useIncrement } from './useIncrement';

describe('hooks/useIncrement', () => {
  it('should return the value added by 1', () => {
    const { result } = renderHook(() => useIncrement(1));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(2);
  });
});
