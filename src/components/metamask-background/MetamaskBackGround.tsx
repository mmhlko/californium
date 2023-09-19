import classNames from "classnames";
import s from "./styles.module.scss";

export const MetamaskBackGround = () => {
    return (
        <>
            <div className={classNames(s.ellipse_01, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_02, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_03, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_04, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_05, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_06, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_07, "ellipse_bg")}></div>
            <div className={classNames(s.ellipse_08, "ellipse_bg")}></div>
        </>
    )
}