import React from 'react';
import styled from 'styled-components';
import { FaHome, FaChartBar, FaClipboardList, FaDatabase, FaCog } from 'react-icons/fa';
import { AiOutlineSetting } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import Product from './Product';

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ArrowIcon = styled.div`
  margin-left: auto; 
`;

const Sidebar = styled.div`
  background-color: #343a40;
  color: #fff;
  width: 200px;
  padding: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #495057;
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;
const SidebarIconHead = styled.div`
  margin-right: 10px;
  width:20px;
`;


const SidebarText = styled.span`
  font-size: 14px;
`;
const SidebarTextHead = styled.span`
  font-size: 18px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MetricCardsContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MetricCard = styled.div`
display: flex;
flex-direction: column;
background-color:white;
align-items: center;
justify-content: center;
color: black;
padding: 20px;
border-radius: 8px;
width: 220px;
height: 100px;
margin-bottom: 20px;
margin-right: 10px;
position: relative;

@media (max-width: 768px) {
  width: 100%;
  margin-right: 0;
}
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color:White;
  border-radius: 50%;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SmallText = styled.span`
  font-size: 12px;
  color:#D8D1CC;
`;

const BigText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const SmallTextBottom = styled.span`
  font-size: 12px;
`;


const Overview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Overview1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width:65%;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Component
const App = () => {
  
  const products = [
    { name: 'Abstract 3D', price: 45.99, sold: 28 },
    { name: 'Surphere Illustration', price: 45.99, sold: 28 },
  ];

  return (
    <Container>
      <Sidebar>
        <SidebarItem>
          <SidebarIcon>
            <AiOutlineSetting size={28}/>
          </SidebarIcon>
          <SidebarTextHead>Dashboard</SidebarTextHead>
        </SidebarItem>
        <br/>
        <SidebarItem style={{backgroundColor:"#495057"}}> 
          <SidebarIcon>
            <FaHome />
          </SidebarIcon>
          <SidebarText >Dashboard</SidebarText>
          <ArrowIcon>
            <FaChevronRight />
          </ArrowIcon>
        </SidebarItem>
        <SidebarItem>
          <SidebarIcon>
            <FaChartBar />
          </SidebarIcon>
          <SidebarText>Reports</SidebarText>
          <ArrowIcon>
            <FaChevronRight />
          </ArrowIcon>
        </SidebarItem>
        <SidebarItem>
          <SidebarIcon>
            <FaClipboardList />
          </SidebarIcon>
          <SidebarText>Tasks</SidebarText>
          <ArrowIcon>
            <FaChevronRight />
          </ArrowIcon>
        </SidebarItem>
        <SidebarItem>
          <SidebarIcon>
            <FaDatabase />
          </SidebarIcon>
          <SidebarText>Data</SidebarText>
          <ArrowIcon>
            <FaChevronRight />
          </ArrowIcon>
        </SidebarItem>
        <SidebarItem>
          <SidebarIcon>
            <FaCog />
          </SidebarIcon>
          <SidebarText>Settings</SidebarText>
          <ArrowIcon>
            <FaChevronRight />
          </ArrowIcon>
        </SidebarItem>
      </Sidebar>
      <Content>
        <Header>
          <h2>Hello Aditya 👋,</h2>
        </Header>
        <MetricCardsContainer>
         <MetricCard>
              <div style={{ display: 'flex' }}>
                <IconContainer style={{backgroundColor: "#4caf50"}}>
                  <FaHome size={36} />
                </IconContainer>
                <TextContainer>
                  <SmallText>Earning</SmallText>
                  <BigText>$198K</BigText>
                  <SmallTextBottom> <span style={{color:"#6EC531", fontWeight:"bold" }}> ⬆ 11.9%</span>this month</SmallTextBottom>
                </TextContainer>
              </div>
          </MetricCard>
          <MetricCard>
              <div style={{ display: 'flex' }}>
                <IconContainer style={{backgroundColor: "#673ab7"}}>
                <FaChartBar size={36} />
                </IconContainer>
                <TextContainer>
                  <SmallText>Orders</SmallText>
                  <BigText>$2.4K</BigText>
                  <SmallTextBottom> <span style={{color:"#FF1A1A", fontWeight:"bold" }}> ⬇ 2%</span> this Month</SmallTextBottom>
                </TextContainer>
              </div>
          </MetricCard>
          <MetricCard>
              <div style={{ display: 'flex' }}>
                <IconContainer style={{backgroundColor: "#2196f3"}}>
                <FaDatabase size={36} />
                </IconContainer>
                <TextContainer>
                  <SmallText>Balance</SmallText>
                  <BigText>$2.4</BigText>
                  <SmallTextBottom> <span style={{color:"#FF1A1A", fontWeight:"bold" }}> ⬇ 2%</span> this Month</SmallTextBottom>
                </TextContainer>
              </div>
          </MetricCard>
          <MetricCard>
              <div style={{ display: 'flex' }}>
                <IconContainer style={{backgroundColor: "#ff5722"}}>
                <FaCog size={36} />
                </IconContainer>
                <TextContainer>
                  <SmallText>Total Sale</SmallText>
                  <BigText>$89K</BigText>
                  <SmallTextBottom> <span style={{color:"#6EC531", fontWeight:"bold" }}> ⬆ 11%</span>this week</SmallTextBottom>
                </TextContainer>
              </div>
          </MetricCard>
        </MetricCardsContainer>
        <ChartContainer>
          <Overview1>
          <BigText>Overview</BigText>
          <SmallText>monthly Earning</SmallText>
            <BarGraph />
          </Overview1>
          <Overview>
            <PieChart />
          </Overview>
        </ChartContainer>
        <Product />
      </Content>
    </Container>
  );
};

export default App;
