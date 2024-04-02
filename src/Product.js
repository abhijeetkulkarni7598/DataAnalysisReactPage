import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  h3 {
    margin: 0;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px); /* Adjust the position as needed */
  left: 0;
  width: 200px; /* Adjust the width as needed */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: none;
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const ProductRow = styled.tr`
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .product-info {
    display: flex;
    align-items: center;
  }

  .product-description {
    margin-top: 5px;
    color: #666; /* Adjust the color as needed */
  }
`;


const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
`;

const products = [
    {
      id: 1,
      name: 'Abstract 3D',
      description: 'Vector abstract 3d form composition in organic style',
      image: 'https://via.placeholder.com/150',
      stock: 32,
      price: 45.99,
      totalSales: 29,
    },
    {
      id: 2,
      name: 'Surphere Illustration',
      description: 'Vector modern abstract shapes composition, bright illustration',
      image: 'https://via.placeholder.com/150',
      stock: 32,
      price: 45.99,
      totalSales: 20,
    },
  ];
  

const Product = () => {
  return (
    <Container>
      <TableHeader>
        <h3>Product Sell</h3>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search..." />
          <Dropdown className="dropdown">
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>
        </SearchContainer>
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell>Product Name</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Total Sales</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id}>
              <td>
                <div className="product-info">
                  <ProductImage src={product.image} alt={product.name} />
                  <div>
                    <div>{product.name}</div>
                    <div className="product-description">{product.description}</div>
                  </div>
                </div>
              </td>
              <td>{product.stock}</td>
              <td>${product.price}</td>
              <td>{product.totalSales}</td>
            </ProductRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Product;
