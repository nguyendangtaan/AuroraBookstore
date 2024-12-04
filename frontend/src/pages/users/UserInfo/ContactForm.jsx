import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactInfo = ({ phone, email, onUpdate }) => {
    return (
      <div>
        <h5 className="text-gray-600 mb-3">Phone number & Email</h5>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <div className="flex justify-between items-center">
            <Form.Control type="text" defaultValue={phone} />
            <Button onClick={() => onUpdate("phone")} variant="outline-secondary" className="ml-2 bg-gradient-to-r from-[#942446] to-[#9c2f5b] hover:from-[#942446] hover:to-[#9c2f5b] text-white py-2 px-4 rounded-lg transform transition duration-200 hover:scale-105 active:scale-95 shadow-lg">
              Update
            </Button>
          </div>
        </Form.Group>
  
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Mail address</Form.Label>
          <div className="flex justify-between items-center">
            <Form.Control type="email" defaultValue={email} />
            <Button onClick={() => onUpdate("email")} variant="outline-secondary" className="ml-2 bg-gradient-to-r from-[#942446] to-[#9c2f5b] hover:from-[#942446] hover:to-[#9c2f5b] text-white py-2 px-4 rounded-lg transform transition duration-200 hover:scale-105 active:scale-95 shadow-lg">
              Update
            </Button>
          </div>
        </Form.Group>
      </div>
    );
  };
  
  export default ContactInfo;