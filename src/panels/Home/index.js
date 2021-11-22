import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Panel, PanelHeader, Button } from "@vkontakte/vkui";

import { TemplatePage } from "../../components/TemplatePage/index";
import "./Home.scss";
import { dataTemplatePages } from "../../helpers";
import { AdminPanel } from "../index";
import { BannedPage } from "../bannedPage/index";
import { bannedList } from "../../helpers/bannedList";

const Home = ({
  id,
  go,
  snackbar,
  fetchedUser,
  setTemplatePage,
  templatePage,
  appID,
  openAlert,
  getButtonStats,
  getStats,
  getGroupId,
  getRandomImg,
  imgIndex,
  publishStories,
  gotToken,
}) => {
  return (
    <>
      {fetchedUser.id && bannedList.includes(fetchedUser.id) ? (
        <BannedPage />
      ) : (
        <div>
          <>
            {fetchedUser && (
              <>
                {[554966402, 616935572, 73606509].includes(fetchedUser.id) ? (
                  <Button
                    onClick={() => navigate("/admin-panel")}
                    className="admin-btn"
                  >
                    Админ панель
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}
          </>

          {dataTemplatePages.map((item, index) => {
            if (item.name === templatePage) {
              return (
                <TemplatePage
                  key={index}
                  icon={item.icon}
                  header={item.header}
                  title={item.title}
                  description={item.description}
                  buttonName={item.buttonName}
                  next={item.next}
                  setTemplatePage={setTemplatePage}
                  fn={item.fn && item.fn}
                  name={item.name}
                  appID={appID}
                  getGroupId={getGroupId}
                  openAlert={openAlert}
                  fetchedUser={fetchedUser}
                  getRandomImg={getRandomImg}
                  imgIndex={imgIndex}
                  gotToken={gotToken}
                  publishStories={publishStories}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export { Home };
