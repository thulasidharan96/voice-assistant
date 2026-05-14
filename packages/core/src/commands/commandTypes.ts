export interface LocalCommand {
  id: string;
  match(input: string): boolean;
  execute(input: string): string;
}
