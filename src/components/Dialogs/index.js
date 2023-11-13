import React from "react";
import orderBy from "lodash/orderBy";

import { DialogItem } from "../";

import "./Dialogs.scss";
import { isToday } from "date-fns";

const Dialogs = ({ items, userId, onSearch }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem key={item._id} isM={item.user._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
