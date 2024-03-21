import React from 'react'
import { IFetchedDataStateTypes } from '../shared/types'
import { errorToast } from '../modules/AttendanceTracker/utils/errorNotification.ts'
import { Loader } from '../shared/components/Loader/Loader.tsx'

interface IWrappedComponentProps<T> {
  status: IFetchedDataStateTypes | undefined
  props: T
}

export const withViewStateStatusHOC = <T extends object>(
  Component: React.ComponentType<T>
) => {
  return ({ status, props }: IWrappedComponentProps<T>) => {
    switch (status) {
      case IFetchedDataStateTypes.error:
        errorToast()
        return null
      case IFetchedDataStateTypes.fetching:
        return <Loader />
      case IFetchedDataStateTypes.success:
        return <Component {...props} />
    }
  }
}
