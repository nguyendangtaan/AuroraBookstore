import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";

const OrderSession = () => {
  const orders = [
    { id: 1, orderDate: "2024-05-20", address: "123 Đường ABC, Hà Nội", status: "PAID", totalPrice: "1500000.00", paymentType: "Thẻ tín dụng", provider: "Vietcombank", accountNumber: "1234567890" },
    { id: 21, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "52.96", paymentType: "cod", provider: "", accountNumber: "" },
    { id: 22, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "52.96", paymentType: "cod", provider: "", accountNumber: "" },
    { id: 23, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "52.96", paymentType: "cod", provider: "", accountNumber: "" },
    { id: 24, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "52.96", paymentType: "cod", provider: "", accountNumber: "" },
    { id: 25, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "52.96", paymentType: "card", provider: "Vietcombank", accountNumber: "1234567890" },
    { id: 26, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "52.96", paymentType: "cod", provider: "", accountNumber: "" },
    { id: 27, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "7.99", paymentType: "card", provider: "Vietcombank", accountNumber: "1234567890" },
    { id: 28, orderDate: "2024-06-06", address: "123 Đường ABC, Hà Nội", status: "UNPAID", totalPrice: "23.97", paymentType: "cod", provider: "", accountNumber: "" }
  ];

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order Date</th>
            <th>Address</th>
            <th>Payment Status</th>
            <th>Total Price</th>
            <th>Payment Type</th>
            <th>Book Name</th>
            <th>Book Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.orderDate}</td>
              <td>{order.address}</td>
              <td>{order.status}</td>
              <td>{order.totalPrice}</td>
              <td>{order.paymentType}</td>
              <td>{order.provider || '-'}</td>
              <td>{order.accountNumber || '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderSession;
