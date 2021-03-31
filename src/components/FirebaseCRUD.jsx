import React, { useState } from "react";
import {
  Grid,
  Segment,
  Button,
  Checkbox,
  Form,
  Header,
} from "semantic-ui-react";
import Menu from "./Menu";
import { create, getAll } from "../services/services";
const FirebaseCRUD = () => {
  const [cFirstName, setCFirstName] = useState("");
  const [cLastName, setCLastName] = useState("");
  const [uFirstName, setUFirstName] = useState("");
  const [uLastName, setULastName] = useState("");

  const data = {
    firstName: cFirstName,
    lasrName: cLastName,
  };

  const handelSubmit = () => {
    create(data);
    console.log("clicked");
  };
console.log(getAll().child('Users'))
  return (
    <div>
      <Menu />
      <Grid container columns="two" divided>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header as="h1">Create User</Header>
              <Form onSubmit={handelSubmit}>
                <Form.Field>
                  <label>First Name</label>
                  <input
                    value={cFirstName}
                    onChange={(e) => setCFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input
                    value={cLastName}
                    onChange={(e) => setCLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button primary type="submit">
                  Create
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as="h1">Update User</Header>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input
                    value={uFirstName}
                    onChange={(e) => setUFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input
                    value={uLastName}
                    onChange={(e) => setULastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button secondary type="submit">
                  Update
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment >
              <Header>User List</Header>

            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default FirebaseCRUD;
