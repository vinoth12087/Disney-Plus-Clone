import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams}  from 'react-router-dom';
import db from '../firebase';

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if(doc.exists){
                    setMovie(doc.data());
                }else{
                    console.log("No such doc in firebase");
                }
            })
            .catch((error) => console.log(error));
    }, [movie,id])
    return(
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt="" />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <Groupwatchbutton>
                    <img src="/images/group-icon.png"  alt="" />
                </Groupwatchbutton>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3vw + 5px);
    position: relative;
    overflow: hidden;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 20vw;
    min-width: 200px;
    margin-top: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    color: #000;

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
          width: 25px;
        }
      }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    border: 1px solid #fff;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.6);

    span {
        color: #fff;
        font-size: 30px;
    }

`
const Groupwatchbutton = styled(AddButton)`
    background: #000;
`
const SubTitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

    @media (max-width: 768px) {
        font-size: 12px;
      }
`
const Description = styled.div`
    font-size: 20px;
    line-height: 1.4;
    margin-top: 16px;
    max-width: 700px;

    @media (max-width: 768px) {
        font-size: 14px;
      }
`
