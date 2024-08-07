export interface IValiStorage {
    setItem<T>(key: string, value: T, expirationMinutes?: number): void;
    getItem<T>(key: string): T | null;
    removeItem(key: string): void;
    clear(): void;
    getAllKeys(): string[];
}