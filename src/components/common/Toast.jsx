import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setNotificationMessage } from "../../lib/actions";

const Toast = ({ notificationObj, setNotificationMessageConnect }) => {
  useEffect(() => {
    (() => {
      if (notificationObj.isShowNotification) {
        setTimeout(() => {
          setNotificationMessageConnect({
            isShowNotification: false,
            notificationMessage: "",
            color: notificationObj.color,
          });
        }, 2000);
      }
    })();
  }, [notificationObj]);

  return (
    <div
      className="overlay"
      style={{
        height: notificationObj.isShowNotification ? "10%" : "0",
        backgroundColor: notificationObj.color,
      }}
    >
      <div className="text">{notificationObj.notificationMessage}</div>
    </div>
  );
};

Toast.propTypes = {
  notificationObj: PropTypes.object.isRequired,
  setNotificationMessageConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notificationObj: state.app.notificationObj,
});

const mapDispatchToProps = {
  setNotificationMessageConnect: setNotificationMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
