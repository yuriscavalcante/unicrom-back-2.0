export abstract class HashProviderProps {
  abstract hash(password: string): Promise<string>;
  abstract compare(password: string, comparePassword: string): Promise<boolean>;
}
