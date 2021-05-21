import { EntityRepository, Repository } from "typeorm";
import { Circle } from "../entity/Circle";
import { User } from "../entity/User";

export interface ICircleRepository {
  saveCircle( circle: Circle ): Promise<void>
  findByCircleId( id: number ): Promise<Circle>
  findByCircleName( name: string ): Promise<Circle>
}

export interface IUserRepository {
  save( user: User ): Promise<void>
  findById( id: number ): Promise<User>
}

@EntityRepository( Circle )
export class CircleReoisitory extends Repository<Circle> implements ICircleRepository {

  async saveCircle( circle: Circle ) {
    return
  }

  async findByCircleId( id: number ) {
    return await super.findOne( { id } )
  }

  async findByCircleName( name: string ) {
    return await super.findOne( { where: { name: name } } )
  }
}