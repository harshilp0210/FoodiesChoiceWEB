import '@testing-library/jest-dom'
import React from 'react'

// Mock Framer Motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, layout, initial, animate, exit, transition, ...props }: any) => <div {...props} > {children} </div>,
        h1: ({ children, layout, initial, animate, exit, transition, ...props }: any) => <h1 {...props} > {children} </h1>,
    },
    AnimatePresence: ({ children }: any) => <>{children} </>,
}));
