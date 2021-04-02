import React, { useState, useEffect } from "react";
import {
  Grid,
  Segment,
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Table,
} from "semantic-ui-react";

import Menu from "./Menu";
import { create, getAll,remove,update } from "../services/services";
const FirebaseCRUD = () => {
  const [cFirstName, setCFirstName] = useState("");
  const [cLastName, setCLastName] = useState("");
  const [uFirstName, setUFirstName] = useState("");
  const [uLastName, setULastName] = useState("");
  const [user, setUser] = useState();
  const [key, setKey] = useState();
  const data = [
    {
      firstName: cFirstName,
      lasrName: cLastName,
    },
  ];

  const handelSubmit = () => {
    create(data);
    console.log("clicked");
  };


  useEffect(() => {
    getAll().on(
      "value",
      (snapshot) => {
        const res = snapshot.val();
        // console.log(res);
        const data = Object.values(res);
        const main = data.map((e) => e[0]);
        console.log(key);
        setUser(main);
        setKey(Object.keys(res));
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }, []);

 

    const handelDelete = (id) => {
      console.log('delete clicked',id)

      console.log(key[id])
      remove(key[id])
    }
    const handelEdit = (id) => {
      console.log('Edit Clicked clicked',id)
    }

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
      </Grid>
      <Grid container>
        <Grid.Row>
          <Grid.Column columns="one">
            <Segment>
              <Header>User List</Header>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {user?.map((user,key) => (
                    <Table.Row index={key}>
                      <Table.Cell>{user.firstName}</Table.Cell>
                      <Table.Cell>{user.lasrName}</Table.Cell>
                      <Table.Cell>
                        <Icon  onClick={()=>handelDelete(key)} color="red" name="user delete" />{" "}
                        <Icon onClick={()=>handelEdit(key)} fitted="true" color="blue" name="edit" />{" "}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default FirebaseCRUD;
