import { IsNumber } from "class-validator"
import { isRegExp } from "util/types"

export class CreateDepartureDto {
  @IsNumber()
  stop_id: number

  departureTime: string
}
