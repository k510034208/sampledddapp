import e = require( "express" );
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Member } from './Member'
import { User } from './User'

@Entity()
export class Circle {

    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column()
    name: string;

    @Column()
    ownerId: number

    @ManyToOne( () => User, owner => owner.id )
    @JoinColumn( { name: 'ownerId' } )
    owner: User

    @OneToMany( () => Member, member => member.id )
    member?: Member[]

    constructor( name: string, owner: number | User ) {
        this.name = name

        if ( owner instanceof User ) {
            this.ownerId = owner.id
        } else {
            this.ownerId = owner
        }
    }

}
