'use client';

import { ReactNode } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

export function ImageSliderProvider({ children }: { children: ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}
