import axios from "axios";
import React, { useEffect, useState } from "react";
import BodyRecoveryComponentCustomer from "../../../components/Customer/Main/BodyRecoveryComponentCustomer/BodyRecoveryComponentCustomer";

export default function BodyRecoveryContainerCustomer() {
  const [bodyRecovery, setBodyRecovery] = useState([]);
  const [newRecovery, setNewRecovery] = useState([]);
  const getBodyRecovery = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/body-recovery`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBodyRecovery().then((bodyRecovery) => {
      setBodyRecovery(bodyRecovery);
      setNewRecovery(bodyRecovery);
    });
  }, []);
  const handleClick = (e) => {
    const { id } = e.target;
    if (id) {
      const recoverFilter = newRecovery.filter((recovery) => {
        console.log(recovery);
        return recovery?.recovery?.id == id;
      });
      setBodyRecovery(recoverFilter);
    } else {
      setBodyRecovery(newRecovery);
    }
  };
  return (
    <div>
      <BodyRecoveryComponentCustomer
        bodyRecovery={bodyRecovery}
        newRecovery={newRecovery}
        isMain={true}
        handleClick={handleClick}
        col1={10}
        col2={4}
      />
    </div>
  );
}
