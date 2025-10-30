import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RoomDisplay } from "./RoomDisplay";

/**
 * Props for `RoomList`.
 */
export type RoomListProps = SliceComponentProps<Content.RoomListSlice>;

/**
 * Component for "RoomList" Slices.
 */
const RoomList: FC<RoomListProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.rooms.map((item) => {
        if (isFilled.contentRelationship(item.room)) {
          return <RoomDisplay key={item.room.id} id={item.room.id} />;
        }
      })}
    </section>
  );
};

export default RoomList;
