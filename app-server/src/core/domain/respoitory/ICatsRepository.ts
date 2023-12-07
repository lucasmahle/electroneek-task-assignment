import Cat from "../model/cats/Cat"

export interface ICatsRepository {
  get(uuid: string): Cat
  insert(cat: Cat): Cat
  update(uuid: string, cat: Cat): Cat
  delete(uuid: string): void
}