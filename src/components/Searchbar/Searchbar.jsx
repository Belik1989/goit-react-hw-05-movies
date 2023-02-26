import { Container } from 'components/SiteHeader/SiteHeader.styled';
import {
  SearchForm,
  SearchFormButton,
  SearchbarInput,
} from './Searchbar.styled';

export function Searchbar({ value, onSearch, onChangeFilter }) {
  return (
    <Container>
      <SearchForm onSubmit={onSearch}>
        <SearchFormButton type="submit">Search</SearchFormButton>
        <SearchbarInput
          name="query"
          type="text"
          value={value}
          typeof="text"
          autoFocus
          placeholder="Search move"
          onChange={event => onChangeFilter(event.target.value)}
        />
      </SearchForm>
    </Container>
  );
}
