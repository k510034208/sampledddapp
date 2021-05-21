import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Circle } from "./Circle";

@Entity()
export class Member {

    @PrimaryColumn()
    readonly id?: number;

    @Column()
    userId: number;

    @ManyToOne( () => Circle, circle => circle.member )
    circle: Circle

    constructor( userId: number ) {
        this.userId = userId
    }

}
