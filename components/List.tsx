import { DepartmentsArray } from "../types/Department";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import React from "react";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  ul {
    padding: 0;
    width: 100%;

    li > div {
      text-align: right;
    }
  }

  p {
    margin-bottom: 0;
    margin-top: 20px;
  }
`;

const List: React.FunctionComponent<DepartmentsArray> = ({ departments }) => {
  return (
    <StyledContainer>
      <Row>
        <Col>
          <h2>List component</h2>
        </Col>
      </Row>
      <Row className="justify-content-center pt-5">
        <Col md={10}>
          <ListGroup variant="flush" as="ul">
            {departments.map((dept) => {
              return (
                <ListGroup.Item
                  action={true}
                  as="li"
                  className="py-4"
                  key={dept.id}
                >
                  <h5>{dept.name}</h5>
                  <span>{dept.city}</span>
                  <span>{`, ${dept.county}`}</span>
                  <span>{`, ${dept.stateAbbr}`}</span>
                  <p>{dept.excerpt}</p>
                  <div>
                    <Link
                      as={`/department/${dept.slug}`}
                      href="/department/[slug]"
                    >
                      <Button variant="outline-info">
                        Contact {dept.agencyAbbr}
                      </Button>
                    </Link>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default List;
