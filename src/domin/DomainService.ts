import { Circle } from "../entity/Circle";
import { ICircleRepository } from "../Repository/Repository";

export class CircleService {
  constructor( private readonly circleRepository: ICircleRepository ) { }

  // 重複チェック
  async isExists( circle: Circle ): Promise<boolean> {
    let duplicated = await this.circleRepository.findByCircleName( circle.name )
    return duplicated != null
  }
}