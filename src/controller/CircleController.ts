import { ICircleFactory } from '../Factory/Factory'
import { ICircleRepository, IUserRepository, CircleReoisitory } from '../Repository/Repository';
import { CircleService } from "../domin/DomainService";
import { CircleCreateCommand } from '../commandObject/CommandObject';
import { getManager } from 'typeorm';


export class CircleController {

  constructor(
    private readonly circleFactory: CircleReoisitory,
    private readonly circleReoisitory: ICircleRepository,
    private readonly circleService: CircleService,
    private readonly userReository: IUserRepository
  ) { }

  async createCircle( command: CircleCreateCommand ): Promise<void> {

    try {
      await getManager().transaction( async transaction => {
        transaction.getCustomRepository( this.circleReoisitory )
      } )
      let owner = await this.userReository.findById( command.userId )

      if ( !owner ) {
        throw Error( 'サークルのオーナが登録されていない' )
      }

      let circle = this.circleFactory.create( command.name, owner )
      if ( await this.circleService.isExists( circle ) ) {
        throw Error( 'サークルは既に存在する' )
      }

      await this.circleReoisitory.save( circle )

    } catch ( err ) {
      console.log( err )
      return
    }
  }
}