import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modelOpened, setModelOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modelOpened}
      onClose={() => setModelOpened(false)}
    >
      {/* Modal content */}
      <form action="" className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="FirstName"
            name="firstname"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="LastName"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Works At"
            name="worksat"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Lives In"
            name="livesin"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
            name="Relationship"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage"  />
          Cover Image
          <input type="file" name="coverImage" />

        </div>
        <button className="button infoButton" >Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModel;
