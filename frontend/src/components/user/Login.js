import React, { Fragment, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'
