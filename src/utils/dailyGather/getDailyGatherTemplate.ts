import { Campus } from '../../types/Campus';
import { formatDate } from '../common/formatDate';

export const getDailyGatherTemplate = (date: string, campus: Campus, name: string) => {
  const title = `[SSAFY] ${formatDate(date)} ${campus}캠퍼스 일일 보고서 취합본 송부`;
  const content = `
    <div>안녕하세요.</div>
    <div>${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${formatDate(date, false)} 일일 프로젝트 진행 보고서 ${campus} 취합본 첨부파일로 송부 드립니다.</div>
    <br>
    <b>특이사항</b>
    <table cellspacing="0" cellpadding="0" border="1" style="margin: 0px; padding: 0px; line-height: 1.2; table-layout: fixed; width: 0px; border-collapse: collapse;">
      <colgroup>
        <col width="62">
        <col width="286">
        <col width="80">
        <col width="80">
      </colgroup>
      <tbody>
        <tr style="height: 21px;">
          <td rowspan="1" colspan="2"
            style="padding: 2px 3px; border: 1px solid rgb(0, 0, 0); vertical-align: bottom; background-color: rgb(231, 217, 241); text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">특이사항
            </span>
          </td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom; background-color: rgb(231, 217, 241); text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">질의응답
            </span>
          </td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom; background-color: rgb(231, 217, 241); text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">개인면담
            </span>
          </td>
        </tr>
        <tr style="height: 21px;">
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); vertical-align: bottom; text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">1반</span></td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">- 해당사항 없음.</span></td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom; text-align: center;">
            <font color="#1e1e23" face="Arial"><span style="font-size: 13.3333px;">0</span></font>
          </td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom; text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">0</span></td>
        </tr>
        <tr style="height: 21px;">
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); vertical-align: bottom; text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">2반</span></td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">- 해당사항 없음.</span></td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom; text-align: center;">
            <font color="#1e1e23" face="Arial"><span style="font-size: 13.3333px;">0</span></font>
          </td>
          <td
            style="padding: 2px 3px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); vertical-align: bottom; text-align: center;">
            <span style="font-size: 10pt; font-family: Arial; color: rgb(30, 30, 35);">0</span></td>
        </tr>
      </tbody>
    </table>
    <br>
    <div>감사합니다.</div>
    <div>${name} 드림.</div>
  `;
  return {
    title,
    content,
  };
};
