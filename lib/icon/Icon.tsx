import React from "react";
import classNames from "classnames";
import './importAll'
import './index.less'

interface IIconProps extends React.SVGAttributes<SVGElement>{
  name: string
}

const Icon: React.FunctionComponent<IIconProps> = ({ name, className ,...restProps}) => {
  return (<svg className={classNames('icon', className)} {...restProps}>
    <use xlinkHref={`#${name}`}/>
  </svg>)

}

export default Icon
