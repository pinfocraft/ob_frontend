import React from 'react';
import { FaWindowClose } from "react-icons/fa";
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import { useTranslation } from 'react-i18next';

export default function WarnDialog(props) {
	const { t } = useTranslation();

	const {
		title = t('TitleConfirm', 'Are you sure?'),
		message = t('GenericErrorMsg', 'Are you sure?'),
		yes = t('Yes', 'Yes'),
		no = t('No', 'No'),
		onYes,
		onNo,
		onCancel,
		open,
		setOpen
	} = props;

	const onCloseDialog = () => {
		setOpen(false);
	};

	const onClickNo = () => {
		if (!!onNo) {
			onNo();
		}
		onCloseDialog();
	};
	const onClickYes = () => {
		if (!!onYes) {
			onYes();
		}
		onCloseDialog();
	};
	const onClickCancel = () => {
		if (!!onCancel) {
			onCancel();
		}
		onCloseDialog();
	}

	return (
		<Dialog onClose={onCloseDialog} aria-labelledby="dialog-title" open={open} className="WarnDialog">
			<DialogTitle id="dialog-title">
				{title}
			</DialogTitle>
			<DialogContent>{message}</DialogContent>
			<DialogActions>
				<Button className="cancelBtn" onClick={onClickNo}>{no}</Button>
				<Button className="delBtn" onClick={onClickYes}>{yes}</Button>
			</DialogActions>
		</Dialog>
	);
};