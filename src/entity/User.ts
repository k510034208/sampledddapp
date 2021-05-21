import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Circle } from "./Circle";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @OneToMany( () => Circle, circle => circle.owner )
    cicle?: Circle[]

    constructor( name: string ) {
        this.name = name
    }

}
