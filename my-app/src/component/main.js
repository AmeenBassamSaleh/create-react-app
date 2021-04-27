import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import HornedBeast from './HornedBeasts';
import array from './array';


class Main extends React.Component {
    render() {
        return (
            <div>
                {
                    array.map((carta) => {
                        return (
                            <HornedBeast
                                url={carta.image_url}
                                title={carta.title}
                                description ={carta.description}
                                keyword={carta.keyword}
                                horns={'1'} />
                        )
                    })
                }
            </div>
        )
    }
}
export default Main;




//     constructor(props){
//     super(props);
//     this.state = {
//         numOfClike : 0
//     }
// }

// sumNumperOfClike = () => {
//     this.setState({numOfClike: this.state.numOfClike +1})
// }

// render() {
//     return (
//         <div>{
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={this.props.url} />
//                 <Card.Body>
//                     <Card.Title>{this.props.Title}</Card.Title>
//                     <Card.Text>
//                     {this.props.description}
//                     </Card.Text>
//                     <Card.Text>
//                     {this.numOfClike}
//                     </Card.Text>
//                     <Button onClick = {this.sumNumperOfClike} variant ='primary'>sum of the clikcs
//                     </Button>
//                 </Card.Body>
//             </Card>
//         }
//         </div>
//     )
// };

// eslint-disable-next-line array-callback-return








{/* <HornedBeast name = {'narwhal'}
url = {'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
title = {'UniWhal'}
alt={'UniWhal'}
description = {'A unicorn and a narwhal nuzzling their horns'}
/>
<HornedBeast name = {'rhino'}
url = {'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}
title = {'Rhino Family'}
alt={'Rhino Family'}
description = {'Mother (or father) rhino with two babies'}
/>
<HornedBeast name = {'unicorn'}
url = {'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'}
title = {'Unicorn Head'}
alt={'Unicorn Head'}
description = {'Someone wearing a creepy unicorn head mask'}
 />  */}