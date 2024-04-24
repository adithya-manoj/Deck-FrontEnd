import React from 'react';
import NavBarComp from './NavBarComp';
import './NavbarComp.css';
import Cardspage from './Cardspage';
import FooterComp from './FooterComp';
import AdminNav from './AdminNav';
import Technology from './Technology';
import Ideas from './Ideas';
import CardGroup from 'react-bootstrap/CardGroup';
import watch from './watch.jpg';
import luxury from './luxury.jpg';
import icon_img from './icon.png';

export const Home = () => {
let datas = [
    {
      img: watch,
      title: 'FINANCE',
      subtitle: 'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
      text: 'There is a lot of exciting stuff going on in the strs above us that make astronomy so much fun.',
      shares: '350 ',
      views: '450',
      messages: '25',
      CardBody:'p-3',
      CardImg:'m-0 h-50'
    },
    {
      title: 'BUSINESS',
      Img_icon_src:icon_img,
      subtitle: 'Boost Your Bottom Line with Proven Strategies',
      text: 'Learn how to maximize profits and streamline operations with expert insights and business tips.',
      shares: '500',
      views: '600',
      messages: '30',
      CardBody:'p-3',
      CardImg:'m-0',
      Img_icon:'h-25 w-50 px-4 my-4',
      Card:'bg-danger text-white'
      
    },
    {
      img: luxury,
      imgclass: 'h-25',
      title: 'LIFESTYLE',
      subtitle: 'Discover Your Passion and Live Your Best Life',
      text: 'Find inspiration for travel, fitness, cooking, and more to create a fulfilling lifestyle.',
      shares: '200',
      views: '300',
      messages: '20',
      CardBody:'p-3',
      CardImg:'m-0 h-50'
    }
  ];

  let datass = [
    {
      title: 'FINANCE',
      subtitle: 'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
      text: 'There is a lot of exciting stuff going on in the strs above us that make astronomy so much fun.',
      shares: '350 ',
      views: '450',
      messages: '25',
      CardBody:'p-3',
      CardImg:'m-0 h-50'
    },
    {
      title: 'BUSINESS',
      subtitle: 'Boost Your Bottom Line with Proven Strategies',
      text: 'Learn how to maximize profits and streamline operations with expert insights and business tips.',
      shares: '500',
      views: '600',
      messages: '30',
      CardBody:'p-3',
      CardImg:'m-0'
    },
    {
      title: 'LIFESTYLE',
      subtitle: 'Discover Your Passion and Live Your Best Life',
      text: 'Find inspiration for travel, fitness, cooking, and more to create a fulfilling lifestyle.',
      shares: '200',
      views: '300',
      messages: '20',
      CardBody:'p-3',
    }
  ];
  return (
    <> 
        <CardGroup>

        {datas.map((item) => (
            <Cardspage
            title={item.title}
            Img_icon_src={item.Img_icon_src}
            subtitle={item.subtitle}
            image={item.img}
            text={item.text}
            shares={item.shares}
            views={item.views}
            messages={item.messages}
            classN={item.classN}
            Card={item.Card}
            CardBody={item.CardBody}
            CardImg={item.CardImg}
            Img_icon={item.Img_icon}
            />
        ))}
        </CardGroup>

        <CardGroup>
            {datass.map((item)=>(
                <Cardspage
                title={item.title}
                Img_icon_src={item.Img_icon_src}
                subtitle={item.subtitle}
                image={item.img}
                text={item.text}
                shares={item.shares}
                views={item.views}
                messages={item.messages}
                classN={item.classN}
                Card={item.Card}
                CardBody={item.CardBody}
                CardImg={item.CardImg}
                Img_icon={item.Img_icon}
                />

            ))}
        </CardGroup>
    



    <FooterComp />
    </>
  );
};
