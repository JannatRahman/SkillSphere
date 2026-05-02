"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      <Button variant="secondary">
        <BiEdit /> Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md overflow-hidden border border-pink-100 shadow-2xl rounded-3xl">

            {/* Pretty background layer */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-white to-pink-100" />

            {/* Decorative blurred circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30 -z-10" />

            {/* Decorative emoji style icons */}
            <div className="absolute top-6 right-6 text-3xl opacity-10 -z-10">
              💻
            </div>
            <div className="absolute bottom-8 left-6 text-3xl opacity-10 -z-10">
              📚
            </div>

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-2xl shadow-sm"
              >
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="image"
                    type="url"
                  >
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your image url" />
                  </TextField>

                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}