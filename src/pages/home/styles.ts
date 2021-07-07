import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  ul li {
    background: #fff;
    border-bottom: 1px solid #ddd;
    margin-top: 5px;
    list-style: none;
    width:100%;
    border-radius:5px;
  }

  ul{
      padding:10px;
      background-color:#f8f8f8;
      margin-top:30px;
      width:100%;
      border-radius:5px;
  }

  span{
      width:100px;
  }

  ul li a {
    text-decoration: none;
  }

  button{
    margin-top:10px;
  }

  ul li button{
    cursor: pointer;
    padding: 5px 15px 5px 10px;
    border-radius: 6px;
    border:0;
    background: grey;
    color: #fff;
    font-weight: bold;
    margin-left: 100px;
    margin-bottom: 10px
  }`