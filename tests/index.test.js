import { jest } from '@jest/globals';

const mockServer = {
    get: jest.fn(),
};
const mockExpress = jest.fn().mockImplementation(() => (mockServer));
jest.unstable_mockModule('express', () => (mockExpress));

const express = await import('express');
const { createServer } = await import('../src/index.js');

describe('src/index.js', () => {
    describe('createServer', () => {
        test('should create a new Express server', () => {
            createServer();

            expect(mockExpress).toHaveBeenCalled();
        });
    });
});