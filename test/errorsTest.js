require('./helper.js')

it('returns proper message on NoDataError_', () => {
  const func = () => {
    throw new san.NoDataError_()
  }
  expect(san.handleErrors_(func)()).to.deep.eq(['No data'])
})

it('returns proper message on HistoricDataForbiddenError_', () => {
  const func = () => {
    throw new san.HistoricDataForbiddenError_()
  }
  const errorMessage =
    'Get premium membership on the following link: https://santiment.net/sansheets/'
  expect(san.handleErrors_(func)()).to.deep.eq([errorMessage])
})

it('returns proper message on InternalServerError_', () => {
  const func = () => {
    throw new san.InternalServerError_()
  }
  expect(san.handleErrors_(func)()).to.deep.eq(['Internal server error!'])
})

it('returns proper message on ServerError_', () => {
  const func = () => {
    throw new san.ServerError_()
  }
  expect(san.handleErrors_(func)()).to.deep.eq(['Server error!'])
})

it('returns proper message on ServerError_ with supplied optional text', () => {
  const func = () => {
    throw new san.ServerError_('Error message.')
  }
  expect(san.handleErrors_(func)()).to.deep.eq(['Server error! Error message.'])
})
