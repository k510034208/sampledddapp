import { Circle } from "../entity/Circle";
import { User } from "../entity/User";

export interface ICircleFactory {
  create( name: string, owner: number | User ): Circle
}