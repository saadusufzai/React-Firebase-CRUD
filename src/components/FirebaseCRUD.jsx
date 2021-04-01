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
import { create, getAll } from "../services/services";
const FirebaseCRUD = () => {
  const [cFirstName, setCFirstName] = useState("");
  const [cLastName, setCLastName] = useState("");
  const [uFirstName, setUFirstName] = useState("");
  const [uLastName, setULastName] = useState("");
  const [user, setUser] = useState()
  const data = [{
    firstName: cFirstName,
    lasrName: cLastName,
  }];

  const handelSubmit = () => {
    create(data);
    console.log("clicked");
  };


var firstName = []
var lastName = []
  useEffect(  () => {
    
   getAll().on(
      "value",
      (snapshot) => {
       
        const res =  snapshot.val();
        console.log(res);
        const data = Object.values(res);
        const main = data.map((e)=>e[0])
        console.log(main.map((e)=>e.firstName));
        setUser(main)
        // snapshot.forEach((item,key) => {
        //   console.log(item.key,item.val());
        //   console.log(key)
        //   firstName.push(item.key,item.val())
        //   lastName.push(item.val())
        // })
        // setUser(user.push({res}))
        // console.log(firstName)
        // console.log(lastName)
     
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }, 
  
  
  []);
  console.log('Users',user?.map((user) => user.firstName));
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
      
      { user?.map((user) => (
          <Table.Row>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lasrName}</Table.Cell>
          <Table.Cell ></Table.Cell>
        </Table.Row>
      ))
      }
    
     
    
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
