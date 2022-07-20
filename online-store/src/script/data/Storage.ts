export default class Storage {

  public saveValue(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public loadValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  public clear(): void {
    localStorage.clear();
  } 
}