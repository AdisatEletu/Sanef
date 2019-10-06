import React from "react";
import { Select } from 'antd';
import querystring from 'querystring';

const { Option } = Select;

let timeout;
let currentValue;

function fetchValue(value, callback) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    function fake() {
        // const str = querystring.encode({
        //     name: value,
        // });

        const str = querystring.encode({
                name: value,
             });

            console.log("value", currentValue, value);
        fetch(`https://restcountries.eu/rest/v2/${str}`)
            .then(response => response.json())
            .then(d => {

                console.log("d",d)
                // if (currentValue === value) {
                //     const { result } = d;
                //     const data = [];
                //     result.forEach(r => {
                //         data.push({
                //             value: r[0],
                //             text: r[0],
                //         });
                //     });
                //     callback(data);
                // }
            });
    }

    timeout = setTimeout(fake, 300);
}

export default class SearchInput extends React.Component {
    state = {
        data: [],
        value: undefined,
    };

    handleSearch = value => {
        fetchValue(value, data => this.setState({ data }));
    };

    handleChange = value => {
        this.setState({ value });
    };

    render() {
        const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
        return (
            <Select
                showSearch
                value={this.state.value}
                placeholder={this.props.placeholder}
                style={this.props.style}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                notFoundContent={null}
            >
                {options}
            </Select>
        );
    }
}