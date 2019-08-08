import React from 'react';
import MenuItem from '../../components/menu-item/MenuItem';
import './directory.scss';

export default class Directory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    title: 'Shoes',
                    imageUrl: 'https://images.pexels.com/photos/2759785/pexels-photo-2759785.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                },
                {
                    title: 'Hats',
                    imageUrl: 'https://images.pexels.com/photos/2766848/pexels-photo-2766848.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                },
                {
                    title: 'Women Fashion',
                    imageUrl: 'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                },
                {
                    title: 'Men Fashion',
                    imageUrl: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                },
            ],
        }
    }

    render() {
        return (
            <div className={'directory-menu'}>
                {this.state.sections.map((section,index) =>
                    <MenuItem
                        key={index}
                        imgUrl={section.imageUrl}
                        size={(index > 2) && 'large'}
                        title={section.title}/>
                )}
            </div>
        );
    }
}