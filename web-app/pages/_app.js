import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import App from 'next/app';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import "codemirror/lib/codemirror.css";
//import "codemirror/theme/material.css";

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		const theme = createMuiTheme({
			palette: {
				background: {
					default: '#EEE',
				},
				primary: {
					main: '#673ab7',
				},
			},
		})

		return (
			<>
				<Head>
					<title>Graph Visualization Demo App</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline>
							<Component {...pageProps} />
					</CssBaseline>
				</ThemeProvider>
			</>
		)
	}
}
