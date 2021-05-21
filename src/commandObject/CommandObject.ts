export class CircleCreateCommand {

  readonly userId: number
  readonly name: string

  constructor(
    userId: number,
    name: string
  ) {
    this.userId = userId
    this.name = name
  }
}