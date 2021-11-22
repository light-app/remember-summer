import React, { useState, useEffect, useReducer } from "react";
import { navigate } from "@reach/router";
import { Tabs, Input, Button } from "antd";
const { TabPane } = Tabs;

import { SettingIcon } from "../../icons";
import { Icon20HomeOutline } from "@vkontakte/icons";

import "./AdminPanelMain.scss";

const AdminPanelMain = ({
  onChangeAction,
  editLinkGroup,
  getPlatform,
  getButtonStats,
  getGroupId,
}) => {
  const arrStats = [];

  for (let key in getButtonStats) {
    if (!key.includes("SquidGameAPP")) {
      arrStats.push({ [key]: getButtonStats[key] });
    }
  }

  return (
    <Tabs
      defaultActiveKey="pages"
      centered
      tabPosition="top"
      style={{ marginTop: getPlatform !== "web" ? "50px" : "0" }}
    >
      <TabPane
        tab={
          <div
            className="admin-panel-container__icon"
            onClick={() => navigate("remember-summer")}
            // onClick={() => navigate("/")}
          >
            {" "}
            <Icon20HomeOutline />
          </div>
        }
        key="home"
      ></TabPane>
      <TabPane tab="Страницы" key="pages">
        <div className="admin-panel-container" key="pages_1">
          <div className="title">Страница: Разрешите доступ</div>
          <Input
            placeholder="Подписка на рассылку"
            onChange={(e) => onChangeAction(e, "setting")}
            type="text"
            defaultValue={`https://vk.com/public${getGroupId.msgSettingPage}`}
          />
          <Button type="primary" onClick={() => editLinkGroup("setting")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_2">
          <div className="title">Страница: Лайк</div>
          <Input
            placeholder="Подписка на паблик"
            onChange={(e) => onChangeAction(e, "like")}
            type="text"
            defaultValue={`https://vk.com/public${getGroupId.subLikePage}`}
          />
          <Button type="primary" onClick={() => editLinkGroup("like")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_3">
          <div className="title">Страница: Провожу анализ МУЖЧИНЫ</div>
          <Input
            placeholder="Подписка на рассылку для МЦА"
            onChange={(e) => onChangeAction(e, "search-man")}
            type="text"
            defaultValue={`https://vk.com/public${getGroupId.msgSearchPageMan}`}
          />
          <Button type="primary" onClick={() => editLinkGroup("search-man")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_4">
          <div className="title">Страница: Провожу анализ ЖЕНЩИНЫ</div>
          <Input
            placeholder="Подписка на рассылку для ЖЦА"
            onChange={(e) => onChangeAction(e, "search-woman")}
            type="text"
            defaultValue={`https://vk.com/public${getGroupId.msgSearchPageWoman}`}
          />
          <Button type="primary" onClick={() => editLinkGroup("search-woman")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_5">
          <div className="title">Страница: Анализ завершен МУЖЧИНЫ</div>
          <Input
            placeholder="Подписка на паблик для МЦА"
            onChange={(e) => onChangeAction(e, "result-man-sub")}
            type="text"
            defaultValue={
              getGroupId.subResultPageMan
                ? `https://vk.com/public${getGroupId.subResultPageMan}`
                : "Укажите ссылку"
            }
          />
          <Button
            type="primary"
            onClick={() => editLinkGroup("result-man-sub")}
          >
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container last" key="pages_6">
          <div className="title">Страница: Анализ завершен ЖЕНЩИНЫ</div>
          <Input
            placeholder="Подписка на паблик для ЖЦА"
            onChange={(e) => onChangeAction(e, "result-woman-sub")}
            type="text"
            defaultValue={
              getGroupId.subResultPageWoman
                ? `https://vk.com/public${getGroupId.subResultPageWoman}`
                : "Укажите ссылку"
            }
          />
          <Button
            type="primary"
            onClick={() => editLinkGroup("result-woman-sub")}
          >
            Изменить
          </Button>
        </div>
      </TabPane>
      <TabPane tab="Статистика" key="statistics">
        <div className="admin-panel-container__statistics">
          {arrStats?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="title"> {Object.keys(item)} </div>
                <div className="count">{Object.values(item)}</div>
              </div>
            );
          })}
        </div>
      </TabPane>
    </Tabs>
  );
};

export { AdminPanelMain };
