import React from "react";
import PropTypes from "prop-types"

export default class Table extends React.Component {
    static propTypes = {
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
    };

    render() {
        const {columns, data, className, bodyStyle, headStyle, headClass} = this.props;
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        {columns.map((column, index) => {
                            return (<th className={headClass} style={headStyle} key={index}>
                                {column.title}
                            </th>)
                        })}
                    </tr>

                    </thead>
                    <tbody>
                    {data.map((source, index) => {
                        return (
                            <tr key={index} className={className} style={bodyStyle}>
                                {columns.map((column, index) => {
                                    return <td key={index}>
                                        {column.render && !column.dataIndex ? column.render(source).props.children : column.render ? column.render(source[column.dataIndex]).props.children : source[column.dataIndex]}
                                    </td>
                                })}
                            </tr>

                        )
                    })}
                    </tbody>
                </table>
            </>
        );
    }
}


